# Welcome to QuickRide

## Project info

**URL**: 

## How can I edit this code?

There are several ways of editing your application.

**Use QuickRide**

Simply visit the [QuickRide]() and start prompting.

Changes made via QuickRide will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in QuickRide.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/IrakozeLoraine/quickride_website.git

# Step 2: Navigate to the project directory.
cd quickride_website

# Step 3: Install the necessary dependencies.
pnpm install

# Step 4: Start the development server with auto-reloading and an instant preview.
pnpm dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Installing the QuickRide App

After downloading the app from our website, follow these step-by-step instructions to install QuickRide on your device.

### For Android Users (APK installation)

1. **Before Installing**:
   - Go to your device **Settings** > **Security** (or **Privacy**)
   - Enable **Install from Unknown Sources** or **Install Unknown Apps** for your browser or file manager
   - On newer Android versions (8.0+), you'll be prompted to allow this permission when you first try to install

2. **Installation Process**:
   - Locate the downloaded APK file (usually in your **Downloads** folder)
   - Tap on the APK file (e.g., **quickride.apk**)
   - Tap **Install** when prompted
   - Wait for the installation to complete
   - Tap **Open** to launch QuickRide or find the app icon in your app drawer

3. **Troubleshooting**:
   - If you get a **Play Protect** warning, tap **Install Anyway** (our app is safe but not yet recognized by Google)
   - If installation fails, check your device has enough storage space
   - Ensure you have a stable internet connection for the first launch

### For iOS Users (IPA installation)

#### Option 1: Using AltStore (Non-Jailbroken Devices)

1. **Install AltServer (Available in EU countries only) on your computer**:
   - Download [AltServer](https://altstore.io/) for Mac or Windows
   - Install and launch AltServer on your computer
   - Connect your iPhone to your computer with a USB cable

2. **Install AltStore on your iPhone**:
   - On your computer, click the AltServer icon
   - Select "Install AltStore" and choose your device
   - Enter your Apple ID and password when prompted
   - Wait for AltStore to install on your device

3. **Trust the Developer Profile**:
   - On your iPhone, go to **Settings** > **General** > **Profiles & Device Management**
   - Find the developer profile associated with your Apple ID
   - Tap **Trust** to verify the profile

4. **Install the QuickRide IPA**:
   - Transfer the downloaded IPA file to your iPhone (via AirDrop, iTunes File Sharing, or iCloud Drive)
   - Open AltStore on your iPhone
   - Go to the "My Apps" tab and tap the "+" button
   - Select the QuickRide IPA file you transferred
   - Sign in with your Apple ID if prompted
   - Wait for the installation to complete

#### Option 2: Run the App Locally from Xcode (Requires macOS and Xcode)
1. **Install Xcode**:
   - Download and install Xcode from the Mac App Store
   - Open Xcode and agree to the license agreement
   - Install any additional components if prompted
2. **Open the QuickRide Project**:
   - Download the QuickRide source code from our website
   - Open the project folder in Xcode
3. **Connect Your iPhone**:
   - Connect your iPhone to your Mac using a USB cable
   - Select your device from the list of simulators in Xcode
4. **Trust the Developer Profile**:
   - On your iPhone, go to **Settings** > **General** > **Profiles & Device Management**
   - Find the developer profile associated with your Apple ID
   - Tap **Trust** to verify the profile
5. **Run the App**:
   - In Xcode, click the "Run" button (the play icon) to build and run the app on your device
   - Wait for the installation to complete
   - The QuickRide app should now be installed on your iPhone
6. **Troubleshooting**:
   - If you encounter any issues, ensure your iPhone is connected and recognized by Xcode
   - Check for any error messages in the Xcode console
   - Make sure you have a valid Apple Developer account if you're using a physical device

#### Option 3: Waiting for Testflight invitation
1. **TestFlight coming soon**:
   - We are working on getting our app available on TestFlight for easier installation
   - Stay tuned for updates on our website
   - Once available, you will receive an invitation to join the TestFlight beta testing program
   - Follow the instructions in the invitation email to install QuickRide via TestFlight
   - Please note that you will need to share with us your Apple ID email address to receive the invitation
