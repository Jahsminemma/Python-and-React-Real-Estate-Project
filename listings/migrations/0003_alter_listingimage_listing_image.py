# Generated by Django 3.2.5 on 2021-07-18 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0002_remove_listing_open_house'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listingimage',
            name='listing_image',
            field=models.ImageField(null=True, upload_to='photos/%Y/%m/%d/'),
        ),
    ]
