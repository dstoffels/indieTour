# Generated by Django 4.1.7 on 2023-03-31 20:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("prospects", "0001_initial"),
        ("tours", "0001_initial"),
        ("dates", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="date",
            name="prospects",
            field=models.ManyToManyField(
                blank=True, related_name="prospect_dates", to="prospects.prospect"
            ),
        ),
        migrations.AddField(
            model_name="date",
            name="tour",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="tourdates",
                to="tours.tour",
            ),
        ),
    ]
