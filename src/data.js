const data = {
  featured_posts: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  all_posts: {
    0: {
      title: "Post 0",
      category: "tech",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 0,
      image_url: "featured-1.jpeg",
      author_id: 0
    },
    1: {
      title: "Post 1",
      category: "future_human",
      description: "Change is coming. Where do you want to land?",
      content:
        "We imagine humanity as a fixed state. People come into being, usually the old-fashioned way. They progress along a timeline of milestones that varies little from person to person. They get sick, occasionally at first, and then inexorably. They die. There are outliers at every step—except for the last one, at least so far—but the human condition is the human condition. How it’s been is how it will be.",
      id: 1,
      image_url: "featured-2.jpeg",
      author_id: 0
    },
    2: {
      title: "Post 2",
      category: "tech",
      description:
        "This software engineer let an algorithm pick where he lives, what he does—even what tattoo to get. Is he onto something?",
      content:
        "Max Hawkins will be getting his first tattoo in a few days, and the panic’s setting in. Not because it’s a permanent choice - although it certainly is. And not because of the pain- he thinks that’ll be manageable enough. Hawkins is panicking because until the moment he walks into the parlor, he won’t have any idea what tattoo he’s getting, or where on his body he’s getting it.",
      id: 2,
      image_url: "featured-3.jpeg",
      author_id: 0
    },
    3: {
      title: "Post 3",
      category: "tech",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 3,
      image_url: "featured-4.jpeg",
      author_id: 1
    },
    4: {
      title: "Post 4",
      category: "tech",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 4,
      image_url: "featured-5.jpeg",
      author_id: 2
    },
    5: {
      title: "Post 5",
      category: "tech",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 5,
      image_url: "featured-6.jpeg",
      author_id: 0
    },
    6: {
      title: "Post 6",
      category: "tech",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 6,
      image_url: "featured-7.jpeg",
      author_id: 0
    },
    7: {
      title: "Post 7",
      category: "politics",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 7,
      image_url: "featured-8.jpeg",
      author_id: 1
    },
    8: {
      title: "Post 8",
      category: "more",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 8,
      image_url: "featured-9.jpeg",
      author_id: 2
    },
    9: {
      title: "Post 9",
      category: "tech",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 9,
      image_url: "featured-1.jpeg",
      author_id: 1
    },
    10: {
      title: "Post 10",
      category: "tech",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 0,
      image_url: "featured-1.jpeg",
      author_id: 0
    },
    11: {
      title: "Post 11",
      category: "future_human",
      description: "Change is coming. Where do you want to land?",
      content:
        "We imagine humanity as a fixed state. People come into being, usually the old-fashioned way. They progress along a timeline of milestones that varies little from person to person. They get sick, occasionally at first, and then inexorably. They die. There are outliers at every step—except for the last one, at least so far—but the human condition is the human condition. How it’s been is how it will be.",
      id: 1,
      image_url: "featured-2.jpeg",
      author_id: 0
    },
    12: {
      title: "Post 12",
      category: "more",
      description:
        "This software engineer let an algorithm pick where he lives, what he does—even what tattoo to get. Is he onto something?",
      content:
        "Max Hawkins will be getting his first tattoo in a few days, and the panic’s setting in. Not because it’s a permanent choice - although it certainly is. And not because of the pain- he thinks that’ll be manageable enough. Hawkins is panicking because until the moment he walks into the parlor, he won’t have any idea what tattoo he’s getting, or where on his body he’s getting it.",
      id: 2,
      image_url: "featured-3.jpeg",
      author_id: 0
    },
    13: {
      title: "Post 13",
      category: "more",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 3,
      image_url: "featured-4.jpeg",
      author_id: 1
    },
    14: {
      title: "Post 14",
      category: "more",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 4,
      image_url: "featured-5.jpeg",
      author_id: 2
    },
    15: {
      title: "Post 15",
      category: "politics",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 5,
      image_url: "featured-6.jpeg",
      author_id: 0
    },
    16: {
      title: "Post 16",
      category: "entrepreneurship",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 6,
      image_url: "featured-7.jpeg",
      author_id: 0
    },
    17: {
      title: "Post 17",
      category: "future_human",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 7,
      image_url: "featured-8.jpeg",
      author_id: 1
    },
    18: {
      title: "Post 18",
      category: "culture",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 8,
      image_url: "featured-9.jpeg",
      author_id: 2
    },
    19: {
      title: "Post 19",
      category: "tech",
      description:
        "By no means should this be regarded as truth, but rather a model that I’ve found extremely helpful in understanding and finding better ways of writing code.",
      content:
        "What makes some piece of code more readable than another? It’s one thing to say that it uses better variable names, but what makes a certain variable name easier to read? I really mean digging deeper into human psyche. It is our brain that is doing all the processing after all.",
      id: 9,
      image_url: "featured-1.jpeg",
      author_id: 1
    }
  }
};

export default data;
