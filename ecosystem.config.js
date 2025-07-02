module.exports = {
  apps: [
    {
      name: 'mybl_kabbik_http',
      cwd: '/opt/kabbik-services/myblAudioBookHttpOnlyPage',
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