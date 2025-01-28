
#### backend/app.js
```javascript
const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const path = require('path');

const app = express();
const port = 3000;

// Configure AWS SDK
AWS.config.update({ region: 'us-east-1' });
const s3 = new AWS.S3();

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// Upload file to S3
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  const params = {
    Bucket: 'your-s3-bucket-name',
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error uploading file');
    } else {
      res.send(`File uploaded successfully: ${data.Location}`);
    }
  });
});

// List files in S3 bucket
app.get('/files', (req, res) => {
  const params = {
    Bucket: 'your-s3-bucket-name'
  };

  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching files');
    } else {
      const files = data.Contents.map(item => item.Key);
      res.json(files);
    }
  });
});

// Download file from S3
app.get('/download/:filename', (req, res) => {
  const params = {
    Bucket: 'your-s3-bucket-name',
    Key: req.params.filename
  };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error downloading file');
    } else {
      res.attachment(req.params.filename);
      res.send(data.Body);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
