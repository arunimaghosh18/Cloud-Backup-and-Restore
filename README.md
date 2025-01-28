# File Backup and Restore System

This project is a cloud-based file backup and restore application designed for secure, scalable, and efficient file management using Amazon Web Services (AWS).

## Features
- **File Upload and Storage**: Users can securely upload files to Amazon S3.
- **File Retrieval**: View and download stored files via a user-friendly web interface.
- **Scalability**: Built on AWS services to handle increasing user demands.
- **Security**: Uses IAM roles and policies for secure file handling.

## Technologies Used
- **Backend**: Node.js with Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Cloud Services**: AWS (S3, EC2, IAM)
- **Operating System**: RedHat Linux on EC2

## Installation and Usage
1. **Clone the repository**:
   ```bash
   git clone https://github.com/arunimaghosh18/File-Backup-Restore-System.git
   cd File-Backup-Restore-System
2. Set Up AWS Infrastructure
   Follow the guides in the infrastructure/ folder to:
   Launch an EC2 instance (infrastructure/ec2_setup.md)
   Create and configure an S3 bucket (infrastructure/s3_setup.md)
   Set up IAM roles for secure access (infrastructure/iam_roles.md)

3. Install Backend Dependencies
   cd backend
   npm install

5. Start the Backend Server
   node app.js
6. Run the Frontend
   Open frontend/index.html in a browser for local use.
   Alternatively, host the frontend on a web server for broader access.


Results
The system successfully:
Uploads files to an S3 bucket.
Retrieves the file list stored in the bucket.
Allows secure file downloads.
The application is built on a scalable and secure infrastructure, leveraging AWS services for high reliability in cloud-native applications.

   
