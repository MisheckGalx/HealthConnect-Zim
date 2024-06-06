from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import render


class Services:
    '''The Services View'''
    template = "services.html"

    @classmethod
    def do_GET(cls ,request ,context={}):
        '''Handle GET REQUEST'''
        GET = request.GET
        return render(request, cls.template, context=context)

    @classmethod
    def do_ERROR(self, request):
        return HttpResponseBadRequest("Bad Request")
    
    @classmethod
    def view(cls, request):
        # HOME VIEW
        ctx = {}
        return cls.do_GET(request, context=ctx)

