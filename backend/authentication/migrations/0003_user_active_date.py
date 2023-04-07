# Generated by Django 4.1.7 on 2023-04-06 16:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("dates", "0003_date_political_location"),
        ("authentication", "0002_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="active_date",
            field=models.ForeignKey(
                default=None,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="dates.date",
            ),
        ),
    ]
