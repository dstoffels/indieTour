# Generated by Django 4.0.4 on 2022-09-02 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='date',
            name='title',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]