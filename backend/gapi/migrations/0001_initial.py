# Generated by Django 4.1.7 on 2023-04-09 17:36

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('place_id', models.CharField(max_length=100, unique=True)),
                ('description', models.CharField(blank=True, max_length=255)),
                ('formatted_address', models.TextField()),
                ('political_address', models.CharField(max_length=100)),
                ('lat', models.DecimalField(decimal_places=10, default=0, max_digits=13)),
                ('lng', models.DecimalField(decimal_places=10, default=0, max_digits=13)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
