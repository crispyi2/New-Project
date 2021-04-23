newproject_sources = [
  'main.c',
  'newproject-window.c',
]

newproject_deps = [
  dependency('gio-2.0', version: '>= 2.50'),
  dependency('gtk+-3.0', version: '>= 3.22'),
]

gnome = import('gnome')

newproject_sources += gnome.compile_resources('newproject-resources',
  'newproject.gresource.xml',
  c_name: 'newproject'
)

executable('newproject', newproject_sources,
  dependencies: newproject_deps,
  install: true,
)
