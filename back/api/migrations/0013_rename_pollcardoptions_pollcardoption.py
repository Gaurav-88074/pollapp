# Generated by Django 4.1.1 on 2022-10-13 21:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_pollcard_pollcardoptions_remove_voteoption_voteduser_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PollCardOptions',
            new_name='PollCardOption',
        ),
    ]
