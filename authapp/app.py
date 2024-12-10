from django.apps import AppConfig

class YourAppConfig(AppConfig):
    name = 'authapp'

    def ready(self):
        import authapp.signals
