# Generated by Django 3.2.5 on 2021-08-04 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_remove_user_profile_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_image',
            field=models.ImageField(default='https://i.pinimg.com/280x280_RS/c7/bc/9f/c7bc9fd3c036ae0572a0e9e597eaf37a.jpg', upload_to='photos/%Y/%m/%d/'),
        ),
    ]
