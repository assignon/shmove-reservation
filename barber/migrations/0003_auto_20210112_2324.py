# Generated by Django 3.1.3 on 2021-01-12 22:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('barber', '0002_standardweek_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='standardweek',
            name='date',
        ),
        migrations.CreateModel(
            name='WeekDates',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=datetime.date(2021, 1, 12))),
                ('slices', models.ManyToManyField(to='barber.TimeSlices')),
            ],
        ),
    ]
