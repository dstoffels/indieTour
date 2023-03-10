# Generated by Django 4.1.7 on 2023-03-09 18:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('tours', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Date',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('title', models.TextField(blank=True, null=True)),
                ('location', models.TextField(null=True)),
                ('notes', models.TextField(null=True)),
                ('is_show_day', models.BooleanField(default=False)),
                ('is_confirmed', models.BooleanField(default=False)),
                ('deal', models.TextField(null=True)),
                ('tour', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tours.tour')),
            ],
        ),
    ]