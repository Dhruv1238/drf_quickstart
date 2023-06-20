from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Data
from .serializers import *



# Create your views here.

@api_view(['GET'])
def getRoutes(request):

    routes=[
        {
            'jaadu':'paadu'
        },
        {
            'paadu':'jaadu'
        }
    ]

    return Response(routes)

@api_view(['GET'])
def getDatas(request):
    data=Data.objects.all()
    serializer=DataSerializer(data,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getData(request, pk):

    data=Data.objects.get(id=pk)
    serializer=SingleDataSerializer(data, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateData(request, pk):
    i=request.data
    data=Data.objects.get(id=pk)
    serializer=UpdateDataSerializer(instance=data, data=i, many=False)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteData(request, pk):
    data=Data.objects.get(id=pk)
    data.delete()
    
    return Response('data succsesfully delete!')