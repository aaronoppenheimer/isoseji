from bottle import route, run, static_file


@route('/<path:path>/<name>')
def index(path,name):
    print '{0} {1}'.format(path,name)
    return static_file(name, root='application/'+path)

@route('/')
def index():
    print 'woo!'
    return static_file('index.html', root='application/pages')

run(host='localhost', port=8080)