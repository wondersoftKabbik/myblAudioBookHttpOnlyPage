module.exports = {
  apps: [
    {
      name: 'mybl_kabbik_http',
      cwd: '/opt/kabbik-services/myblAudioBookKabbik',
      "instances" : "1",
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 8096,
      },
    },
  ],
};