export interface AppDetail {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  description: string;
  version: string;
  releaseDate: string;
  category: string;
  size: string;
  minAndroid: string;
  targetAndroid: string;
  packageName: string;
  downloadUrl: string;
  playStoreUrl?: string;
  rating: number;
  ratingCount: string;
  downloads: string;
  badge: string;
  accentColor: string;
  secondaryColor: string;
  iconBg: string;
  status: 'live' | 'beta' | 'coming_soon';
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const APPS_DATA: AppDetail[] = [
  {
    id: 'snapdl',
    slug: 'snapdl',
    name: 'SnapDL',
    tagline: 'Smart Video Downloader & Private Media Vault',
    shortDesc:
      'Ultra-fast video & media downloader with a private encrypted vault, 4K/1080p stream support, audio extractor, and background download manager for Android.',
    description:
      'SnapDL is an all-in-one Android utility engineered for speed, privacy, and seamless media preservation. Detect videos instantly from web links and social feeds, download in full 4K UHD or extract high-fidelity 320kbps MP3 audio with our multi-threaded turbo engine. Protect your personal files behind a military-grade PIN and biometric-locked Media Vault — 100% private, with zero server tracking.',
    version: '1.0.0',
    releaseDate: 'October 2026',
    category: 'Media Downloader & Security Vault',
    size: '18.5 MB',
    minAndroid: 'Android 8.0 (Oreo) or higher',
    targetAndroid: 'Android 14 / 15 (API 34+)',
    packageName: 'com.itechqu.snapdl',
    downloadUrl: 'https://multiplayer.itechqu.com/api/v1/apps/banners/apk/snapdl',
    playStoreUrl: undefined,
    rating: 4.9,
    ratingCount: '2,400+ reviews',
    downloads: '25K+',
    badge: 'Official Release',
    accentColor: '#06B6D4',
    secondaryColor: '#3B82F6',
    iconBg: 'linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)',
    status: 'live',
    features: [
      {
        title: 'Turbo Multi-Threaded Engine',
        description:
          'Parallel multi-segmented chunk downloading delivers up to 6x faster speeds with auto-resume for interrupted connections.',
        icon: 'Zap',
      },
      {
        title: 'Encrypted Media Vault',
        description:
          'Secure personal videos and sensitive photos behind a PIN code or biometric fingerprint lock, hidden from your phone\'s gallery.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Crystal-Clear 4K & 1080p',
        description:
          'Full support for high-definition resolutions up to 4K UHD at 60fps, preserving original color grading and bitrates.',
        icon: 'Tv',
      },
      {
        title: '1-Tap Audio & MP3 Extractor',
        description:
          'Easily extract audio tracks from any video source into clean 320kbps MP3 or M4A formats with automatic metadata tagging.',
        icon: 'Music',
      },
      {
        title: 'Built-in Floating HD Player',
        description:
          'Play downloaded media immediately inside the app with picture-in-picture (PiP) floating mode, gesture seek, and volume control.',
        icon: 'PlayCircle',
      },
      {
        title: 'Zero Tracking & Total Privacy',
        description:
          'No registration, no accounts, and no data harvesting. All processing, downloads, and files stay completely local on your device.',
        icon: 'Lock',
      },
    ],
    specifications: [
      { label: 'App Name', value: 'SnapDL — Video Downloader & Vault' },
      { label: 'Package Identifier', value: 'com.itechqu.snapdl' },
      { label: 'Current Version', value: 'v1.0.0' },
      { label: 'Download Size', value: '18.5 MB' },
      { label: 'Minimum Android OS', value: 'Android 8.0 (API 26)' },
      { label: 'Target Architecture', value: 'arm64-v8a, armeabi-v7a, x86_64' },
      { label: 'Developer', value: 'iTechQu Labs (Information Technology With Quality)' },
      { label: 'Pricing & License', value: '100% Free • Safe & Clean' },
    ],
    highlights: [
      'Fast URL detection with 1-click clipboard paste',
      'Background download manager with persistent notifications',
      'Biometric PIN & fingerprint-protected Media Vault',
      'Auto-categorization into Videos, Music, and Private folders',
      'Support for SD card storage and external drives',
      'Clean Glassmorphic dark UI tailored for AMOLED screens',
    ],
    faqs: [
      {
        question: 'Is SnapDL free to download and use?',
        answer:
          'Yes, SnapDL is 100% free to download and use. It provides full access to high-speed multi-threaded downloads, 4K/1080p resolutions, and the private encrypted media vault without any hidden subscriptions.',
      },
      {
        question: 'How do I install SnapDL APK on my Android phone?',
        answer:
          'Simply tap the \'Download APK\' button to download the latest APK file. Once downloaded, tap the notification or open your Downloads folder, tap the APK, and allow \'Install from unknown sources\' if prompted by Android. The installation finishes in seconds.',
      },
      {
        question: 'How does the Media Vault keep my videos private?',
        answer:
          'When you move files into SnapDL\'s Media Vault, they are stored in a protected internal directory with custom encryption and excluded from Android\'s public MediaStore. They will not appear in Google Photos, Gallery, or file managers, and can only be opened using your secret PIN or fingerprint.',
      },
      {
        question: 'Does SnapDL collect my browsing history or download links?',
        answer:
          'No. iTechQu is committed to strict privacy principles. SnapDL does not log your browsing activities, URL inputs, or downloaded media. Everything happens directly on your device with no server telemetry.',
      },
      {
        question: 'Can I extract only audio / MP3 from a video link?',
        answer:
          'Yes! When you input or detect a video link, SnapDL lets you select whether to download the video in 4K/1080p/720p or extract the audio directly as a high-quality 320kbps MP3.',
      },
    ],
  },
  {
    id: 'hcplayer',
    slug: 'hcplayer',
    name: 'HC Player',
    tagline: 'Ultra-Smooth 4K Media Player & Multiplayer Gaming',
    shortDesc:
      'Hardware-accelerated 4K media player featuring PiP floating mode, gesture seeking, audio equalizer, video trimmer, and real-time multiplayer Saanp Seedhi gaming.',
    description:
      'HC Player is an ultra-fluid Android video player engineered by iTechQu with high-efficiency hardware decoding. Enjoy stutter-free 4K Ultra HD playback, seamless picture-in-picture floating windows, multi-track audio switching, and video trimming. Plus, experience the built-in multiplayer Snake & Ladder (Saanp Seedhi) game with friends across online rooms or local pass-and-play.',
    version: '1.0.4',
    releaseDate: 'October 2026',
    category: 'Video Players & Entertainment',
    size: '26.2 MB',
    minAndroid: 'Android 6.0 (Marshmallow) or higher',
    targetAndroid: 'Android 14 / 15 (API 34+)',
    packageName: 'com.itechqu.hcplayer',
    downloadUrl: 'https://multiplayer.itechqu.com/api/v1/apps/banners/apk/hc_player',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.itechqu.hcplayer',
    rating: 4.8,
    ratingCount: '5,800+ reviews',
    downloads: '50K+',
    badge: 'Play Store Verified',
    accentColor: '#7C3AED',
    secondaryColor: '#EC4899',
    iconBg: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
    status: 'live',
    features: [
      {
        title: 'Hardware Accelerated 4K UHD',
        description:
          'Ultra-low latency hardware decoding engine for MKV, MP4, AVI, WebM, and FLV up to 4K 60fps with zero frame drops.',
        icon: 'Film',
      },
      {
        title: 'Floating PiP Window',
        description:
          'Continue watching your favorite movies while multitasking, chatting, or browsing with resizable picture-in-picture floating player.',
        icon: 'Layers',
      },
      {
        title: 'Intuitive Gesture Controls',
        description:
          'Smooth swipe gestures for instant volume, display brightness, playback scrubbing, and double-tap fast forward / rewind.',
        icon: 'Sliders',
      },
      {
        title: 'Multiplayer Saanp Seedhi Game',
        description:
          'Integrated classic Snake & Ladder board game with online private rooms, global multiplayer relay, and pass-and-play offline mode.',
        icon: 'Gamepad2',
      },
      {
        title: 'Video Cutter & Trimmer',
        description:
          'Built-in precision video editor to trim, cut, and export clips without compromising original video or audio quality.',
        icon: 'Scissors',
      },
      {
        title: 'Subtitle & Audio Track Switcher',
        description:
          'Full support for embedded and external subtitle files (.srt, .vtt, .ass) and dual-audio language track selection.',
        icon: 'Subtitles',
      },
    ],
    specifications: [
      { label: 'App Name', value: 'HC Player — 4K Player & Games' },
      { label: 'Package Identifier', value: 'com.itechqu.hcplayer' },
      { label: 'Current Version', value: 'v1.0.4' },
      { label: 'Download Size', value: '26.2 MB' },
      { label: 'Minimum Android OS', value: 'Android 6.0 (API 23)' },
      { label: 'Target Architecture', value: 'Universal (arm64, armv7, x86)' },
      { label: 'Google Play Store', value: 'Verified & Published' },
      { label: 'Developer', value: 'iTechQu (Information Technology With Quality)' },
    ],
    highlights: [
      'Available on Google Play Store with Play Protect certification',
      'Floating Pop-up player with background playback support',
      'Snake & Ladder multiplayer game with difficulty levels',
      'Automatic folder scanning and smart media categorization',
      'Night mode with OLED-friendly pure black aesthetic',
      'Screen lock feature to prevent accidental touches during playback',
    ],
    faqs: [
      {
        question: 'Is HC Player available on the Google Play Store?',
        answer:
          'Yes! HC Player is officially published and verified on the Google Play Store. You can download it directly from Google Play or download the direct APK bundle from this website.',
      },
      {
        question: 'What video formats does HC Player support?',
        answer:
          'HC Player supports all major multimedia formats including MP4, MKV, AVI, MOV, FLV, TS, WebM, and M4V with hardware decoding up to 4K Ultra HD.',
      },
      {
        question: 'How does the Multiplayer Saanp Seedhi game work?',
        answer:
          'You can play Snake & Ladder directly inside HC Player. You can create an online room and share the room code with friends, play with random online players via our high-speed relay server, or play in pass-and-play offline mode.',
      },
      {
        question: 'Can I use HC Player in Picture-in-Picture (PiP) mode?',
        answer:
          'Yes, just tap the PiP button while playing any video, and it will shrink into a floating window that stays on top while you use WhatsApp, browser, or any other app.',
      },
    ],
  },
];

export const UPCOMING_UTILITIES = [
  {
    name: 'SnapFlow AI',
    tagline: 'AI Video Editor & Auto Trimmer',
    desc: 'Intelligent video summarization, automatic silence remover, AI subtitle generator, and viral short-form clip maker.',
    icon: 'Sparkles',
    color: '#F59E0B',
    status: 'In Development',
  },
  {
    name: 'iQ Direct Share',
    tagline: 'Offline High-Speed P2P File Transfer',
    desc: 'Blazing fast local Wi-Fi Direct file sharing between Android, iOS, Windows, and Mac with zero mobile data consumption.',
    icon: 'Share2',
    color: '#10B981',
    status: 'Private Beta',
  },
  {
    name: 'GameVault Arcade',
    tagline: 'Multiplayer Classic Board Games Hub',
    desc: 'Play Ludo, Chess, Carrom, and Saanp Seedhi with real-time audio chat and online multiplayer tournaments.',
    icon: 'Gamepad',
    color: '#EC4899',
    status: 'Coming Soon',
  },
];
