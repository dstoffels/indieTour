# Generated by Django 4.1.7 on 2023-04-04 19:39

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("venues", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="venue",
            name="formatted_address",
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name="venue",
            name="lat",
            field=models.DecimalField(decimal_places=6, default=0, max_digits=9),
        ),
        migrations.AlterField(
            model_name="venue",
            name="lng",
            field=models.DecimalField(decimal_places=6, default=0, max_digits=9),
        ),
        migrations.AlterField(
            model_name="venue",
            name="place_id",
            field=models.CharField(max_length=255),
        ),
    ]