# Generated by Django 4.1.1 on 2022-09-09 00:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('godzilla', '0003_alter_kaiju_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kaiju',
            name='noise',
            field=models.TextField(default='No Audio'),
        ),
    ]