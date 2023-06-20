from rest_framework.serializers import ModelSerializer
from .models import Data



class DataSerializer(ModelSerializer):
    class Meta:
        model = Data
        fields = ['id','type','created_time']

class SingleDataSerializer(ModelSerializer):
    class Meta:
        model = Data
        fields = '__all__'

class UpdateDataSerializer(ModelSerializer):
    class Meta:
        model = Data
        fields = ['value']