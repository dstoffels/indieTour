# Generated by Django 4.1.7 on 2023-04-05 17:17

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("dates", "0002_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="date",
            name="political_location",
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
