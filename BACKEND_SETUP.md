# Backend Email Setup

## Setup Instructions

### 1. Install Backend Dependencies
```bash
npm install
```

### 2. Configure Email Credentials

#### Option A: Using Gmail (Recommended)

1. **Create a `.env` file** in the project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. **Get Gmail App Password**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable "2-Step Verification" if not already enabled
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password

3. **Update `.env` file**:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-app-password
   CONTACT_EMAIL=isaacmburu2540@gmail.com
   ```

#### Option B: Using Another Email Service
Update the `server.js` file with your email provider's settings (see Nodemailer documentation).

### 3. Run the Backend Server

In a **separate terminal**, run:
```bash
npm run server
```

The server will start on `http://localhost:5000`

### 4. Run the Frontend

In your main terminal, run:
```bash
npm start
```

The React app will open on `http://localhost:3000`

## Important Notes

- **Both servers must be running** for the contact form to work
- The backend server must be on port 5000
- The frontend will be on port 3000
- Do NOT commit the `.env` file to git (it's in `.gitignore`)

## If Backend Email Fails

If the backend email service doesn't work, revert to the FormSubmit version:

```bash
git checkout HEAD -- src/Components/Contact.jsx
```

Then remove the server files and restore the original form submission.

## Troubleshooting

- **"Connection refused" error**: Make sure the server is running with `npm run server`
- **Gmail authentication fails**: Verify you're using an App Password, not your regular password
- **CORS errors**: Check that the frontend is making requests to `http://localhost:5000/api/send-email`
