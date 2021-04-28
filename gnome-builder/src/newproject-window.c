/* newproject-window.c
 *
 * Copyright 2021 krispyi2
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

#include "newproject-config.h"
#include "newproject-window.h"

struct _NewprojectWindow
{
  GtkApplicationWindow  parent_instance;

  /* Template widgets */
  GtkHeaderBar        *header_bar;
  GtkLabel            *label;
};

G_DEFINE_TYPE (NewprojectWindow, newproject_window, GTK_TYPE_APPLICATION_WINDOW)

static void
newproject_window_class_init (NewprojectWindowClass *klass)
{
  GtkWidgetClass *widget_class = GTK_WIDGET_CLASS (klass);

  gtk_widget_class_set_template_from_resource (widget_class, "/org/example/App/newproject-window.ui");
  gtk_widget_class_bind_template_child (widget_class, NewprojectWindow, header_bar);
  gtk_widget_class_bind_template_child (widget_class, NewprojectWindow, label);
}

static void
newproject_window_init (NewprojectWindow *self)
{
  gtk_widget_init_template (GTK_WIDGET (self));
}
