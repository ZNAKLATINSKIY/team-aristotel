class Time_class:
    hours = -1
    minutes =-1

def f_time(self, st_time):
    t1 = st_time.split(':')
    self.hours = int (t1[0])
    self.minutes = int (t1[1])


object_time = Time_class()
object_time.f_time('14:35')
print (f' Часы = {object_time.hours}, минуты = {object_time.minutes}')
