# deploy.md

name: Deploy to WordPress.com
on:
push:
branches: - "main" - "staging"
env:
FTP_USER: ${{ github.ref == 'refs/heads/staging' && vars.STAGING_FTP_USER || vars.PRODUCTION_FTP_USER }}
FTP_PASSWORD: ${{ github.ref == 'refs/heads/staging' && secrets.STAGING_FTP_PASSWORD || secrets.PRODUCTION_FTP_PASSWORD }}
jobs:
FTP-Deploy-Action:
name: FTP-Deploy-Action
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v4 - name: Set-FTP-Credentials
uses: Automattic/FTP-Deploy-Action@3.1.2
with:
ftp-server: sftp://sftp.wp.com/htdocs/
ftp-username: ${{ env.FTP_USER }}
ftp-password: ${{ env.FTP_PASSWORD }}
known-hosts: ${{ vars.WP_KNOWN_HOSTS }}
