def converter(celsuis):
    farenheit = (celsuis*9/5)+32
    message = str(celsuis)+" celsuis are "+str(farenheit)+" farenheit."
    return message

print(converter(47))
print(converter(23))
print(converter(81))