import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.thirdforce.eristana',
  appName: 'TF Eristana',
  webDir: 'www',
  server: {
    url: 'https://tf-eristana-qef1.vercel.app', // Your new link
    cleartext: true
  }
};

export default config;