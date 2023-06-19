from django.db import models

# Create your models here.

class Data(models.Model):
    type = models.TextField(null=False, blank=False)
    value = models.TextField(null=True, blank=True)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.type[0:10]
    