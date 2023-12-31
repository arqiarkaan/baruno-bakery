FROM httpd:2.4

# Salin file httpd.conf yang telah disesuaikan ke dalam container
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf

# Salin seluruh konten proyek ke dalam direktori htdocs
COPY . /usr/local/apache2/htdocs/

# Port yang akan diexpose oleh container
EXPOSE 8081

# Perintah yang dijalankan saat container dimulai
CMD ["httpd", "-D", "FOREGROUND"]
