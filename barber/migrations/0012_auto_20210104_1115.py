# Generated by Django 3.1.3 on 2021-01-04 10:15

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('barber', '0011_auto_20210104_1109'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointments',
            name='date_booked_end',
            field=models.DateTimeField(default=datetime.datetime(2021, 1, 4, 11, 15, 30, 527475)),
        ),
        migrations.AlterField(
            model_name='appointments',
            name='date_booked_start',
            field=models.DateTimeField(default=datetime.datetime(2021, 1, 4, 11, 15, 30, 527475)),
        ),
        migrations.AlterField(
            model_name='appointments',
            name='treatment',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='barber.treatments'),
        ),
        migrations.AlterField(
            model_name='changes',
            name='slices',
            field=models.ManyToManyField(to='barber.TimeSlices'),
        ),
        migrations.AlterField(
            model_name='standardweek',
            name='slices',
            field=models.ManyToManyField(to='barber.TimeSlices'),
        ),
    ]
