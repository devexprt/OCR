import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  navigation: Array<Object> = [
    {
      "title": "Menu",
      "items": [
        {
          "url": "dashboards/dashboard",
          "icon": "sli-chart",
          "title": "Dashboard",
          "items": [],
          "id": "dashboard"
        },
        {
          "icon": "sli-people",
          "title": "All Clients",
          "items": [
            {
              "url": "pages/scan-your-document",
              "icon": "",
              "title": "Scan your document",
              "items": [],
              "id": "scan-your-document"
            },
            {
              "url": "pages/all-scanned-documents",
              "icon": "",
              "title": "All scanned documents",
              "items": [],
              "id": "all-scanned-documents"
            }
           
          ],
          "id": "all-clients"
        },
        {
          "url": "pages/user-management",
          "icon": "sli-user",
          "title": "User Management",
          "items": [
           {
              "url": "pages/all-users",
              "icon": "",
              "title": "All users",
              "items": [],
              "id": "all-users"
            },
             {
              "url": "pages/add-user",
              "icon": "",
              "title": "Add users",
              "items": [],
              "id": "add-users"
            }
            ],
          "id": "user-managemnt"
        },


        {
          "url": "ui-elements/profile",
          "icon": "sli-user",
          "title": "Profile",
          "items": [],
          "id": "profile"
        },
        




        {
          "url": "pages/user-profile",
          "icon": "sli-wrench",
          "title": "Settings",
          "items": [],
          "id": "profile-settings"
        },
         {
          "url": "#",
          "icon": "sli-logout",
          "title": "Logout",
          "items": [],
          "id": "logout"
        }
      ],
      "id": "components"
    },
     
  ];

  getNavigation(): Array<Object> {
    return this.navigation;
  }

}
