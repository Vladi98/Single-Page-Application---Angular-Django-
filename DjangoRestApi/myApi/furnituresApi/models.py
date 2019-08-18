from django.db import models
from django.conf import settings

# Create your models here.
 


class Category(models.Model):
    name = models.CharField(max_length=50,blank=True,null=True)

    def __str__(self):
        return (self.name)
        
    class Meta:
        verbose_name_plural = "Categories"



class Furnitures(models.Model):
    name = models.CharField( max_length=50, blank = True)
    material = models.CharField(max_length=50, blank = True)
    price = models.DecimalField( max_digits=5, decimal_places=2)
    image = models.CharField(max_length=1000, blank=True, null = True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()

    def __str__(self):
        return str(self.name)

    class Meta:
        verbose_name_plural= "Furnitures"