import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.thirdforce.eristana',
  appName: 'TF Eristana',
  webDir: 'www',
  server: {
    url: 'https://tf-eristana.vercel.app', // REPLACE THIS with your actual Vercel link!
    cleartext: true
  }
};

export default config;