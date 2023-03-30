# Generated by Django 4.1.5 on 2023-03-18 18:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0002_alter_tour_notes'),
        ('dates', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='date',
            name='tour',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tourdates', to='tours.tour'),
        ),
    ]