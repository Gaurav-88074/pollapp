# Generated by Django 4.1.1 on 2022-10-13 21:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0011_remove_poll_question_poll_pollquestion'),
    ]

    operations = [
        migrations.CreateModel(
            name='PollCard',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('createdBy', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PollCardOptions',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('optionTitle', models.CharField(blank=True, max_length=200, null=True)),
                ('pCardId', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.pollcard')),
            ],
        ),
        migrations.RemoveField(
            model_name='voteoption',
            name='votedUser',
        ),
        migrations.DeleteModel(
            name='poll',
        ),
        migrations.DeleteModel(
            name='profile',
        ),
        migrations.DeleteModel(
            name='VoteOption',
        ),
    ]
