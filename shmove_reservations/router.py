from rest_framework import routers
from barber.views import TestView, NewAppointments, GetAppointments  # example of rest api view import


router = routers.DefaultRouter()
router.register('test', TestView)  # example of how to register a function as api route
router.register('appointments', GetAppointments)
