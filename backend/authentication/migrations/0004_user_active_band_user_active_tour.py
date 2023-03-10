# Generated by Django 4.1.5 on 2023-03-09 18:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0001_initial'),
        ('bands', '0001_initial'),
        ('authentication', '0003_remove_user_active_band_remove_user_active_tour'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='active_band',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='bands.band'),
        ),
        migrations.AddField(
            model_name='user',
            name='active_tour',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='tours.tour'),
        ),
    ]