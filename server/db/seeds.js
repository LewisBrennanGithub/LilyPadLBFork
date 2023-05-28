use LilyPad;
db.dropDatabase();

const frogs = [
    {
      "name": "Kermitt",
      "image_url": "https://images.unsplash.com/photo-1598537179958-687e6cc625fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      "friends": []
    },
    {
      "name": "Throg",
      "image_url": "https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "friends": []
    },
    {
      "name": "Bogariel Frogariel",
      "image_url": "https://images.unsplash.com/photo-1591575930710-f88ddf08a52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "friends": []
    },
    {
      "name": "Hot Toady",
      "image_url": "https://images.unsplash.com/photo-1579380608611-224fa7dce7b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "friends": []
    },
    {
        "name": "Bully the Frog",
        "image_url": "https://images.unsplash.com/photo-1560726853-257e78b87eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
        "friends": []
    },
    {
      "name": "Anthony Hopkins",
      "image_url": "https://images.pexels.com/photos/63650/frog-toad-eyes-animal-63650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "friends": []
    },
    {
      "name": "Alfred Hitchcroak",
      "image_url": "https://images.pexels.com/photos/1370740/pexels-photo-1370740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "friends": []
    },
    {
      "name": "Humphrey Frogart",
      "image_url": "https://images.pexels.com/photos/57727/tree-frog-anuran-frog-amphibians-57727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "friends": []
    },
    {
      "name": "MC Hopper",
      "image_url": "https://images.pexels.com/photos/12514394/pexels-photo-12514394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "friends": []
    },
    {
      "name": "Lollihops",
      "image_url": "https://images.pexels.com/photos/8816110/pexels-photo-8816110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "friends": []
    },
    {
      "name": "Hypnotoad",
      "image_url": "https://images.pexels.com/photos/4257024/pexels-photo-4257024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "friends": []
    },
    {
      "name": "Trevor",
      "image_url": "https://images.pexels.com/photos/45863/frog-butterfly-pond-mirroring-45863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "friends": []
    },
      
  ]

const insertFrogResult = db.frogs.insertMany(frogs)

const kermittId = insertFrogResult.insertedIds[0]
const throgId = insertFrogResult.insertedIds[1]
const bogarielId = insertFrogResult.insertedIds[2]
const hotToadyId = insertFrogResult.insertedIds[3]
const bullyId = insertFrogResult.insertedIds[4]

const posts = [
  {
    "poster": kermittId,
    "receiver": throgId,
    "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "comment": {
        "original": "This is a comment"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2022-03-02T12:33:32+01:00"
  },
  {
    "poster": hotToadyId,
    "receiver": kermittId,
    "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "comment": {
        "original": "This is not a comment"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2007-03-02T12:33:32+01:00"
  },
  {
    "poster": bullyId,
    "receiver": bogarielId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2022-01-17T07:33:32+01:00"
  },
  {
    "poster": bullyId,
    "receiver": throgId,
    "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "comment": {
        "original": "This could be a comment, but without an image"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2023-02-17T09:33:32+01:00"
  },
  {
    "poster": hotToadyId,
    "receiver": bogarielId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2019-09-17T07:33:32+01:00"
  },
  {
    "poster": throgId,
    "receiver": bogarielId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2022-01-17T16:33:32+01:00"
  },
  {
    "poster": hotToadyId,
    "receiver": bogarielId,
    "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "comment": {
        "original": "This could be a comment, but without an image"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2022-03-02T11:33:32+01:00"
  },
  {
    "poster": bullyId,
    "receiver": bogarielId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2022-05-02T11:33:32+01:00"
  },
  {
    "poster": kermittId,
    "receiver": bogarielId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2022-05-02T10:33:32+01:00"
  },
  {
    "poster": hotToadyId,
    "receiver": throgId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2022-05-02T09:33:32+01:00"
  },
  {
    "poster": kermittId,
    "receiver": hotToadyId,
    "image_url": "https://images.unsplash.com/photo-1622268002940-4a58833ec8f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    "comment": {
        "original": "This could be a comment, but without an image"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "2022-05-02T11:59:32+01:00"
  },
  {
    "poster": bullyId,
    "receiver": kermittId,
    "image_url": "",
    "comment": {
        "original": "This could be a comment, but without an image"
    },
    "responses":[
      {
        "comment":"This is a response",
        "poster": hotToadyId,
        "date": "2023-05-02T15:33:32+01:00"
      },
      {
        "comment":"This is a second response",
        "poster": bogarielId,
        "date": "2023-05-03T09:33:32+01:00"
      }
    ],
    "date": "0700-05-02T12:10:32+01:00"
  },
]

const insertPostResult = db.posts.insertMany(posts)
