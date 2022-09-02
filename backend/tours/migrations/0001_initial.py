# Generated by Django 4.0.4 on 2022-09-02 16:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contacts', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('bands', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Date',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('location', models.TextField(null=True)),
                ('is_show_day', models.BooleanField(default=False)),
                ('is_confirmed', models.BooleanField(default=False)),
                ('deal', models.TextField(null=True)),
                ('notes', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='EventType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Tour',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('notes', models.TextField(null=True)),
                ('band', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bands.band')),
                ('users', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Timeslot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=255)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField(null=True)),
                ('start_location', models.TextField()),
                ('end_location', models.TextField()),
                ('date', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tours.date')),
                ('event_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tours.eventtype')),
            ],
        ),
        migrations.CreateModel(
            name='DateContact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('contact', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contacts.contact')),
                ('date', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tours.date')),
            ],
        ),
        migrations.AddField(
            model_name='date',
            name='tour',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tours.tour'),
        ),
    ]
