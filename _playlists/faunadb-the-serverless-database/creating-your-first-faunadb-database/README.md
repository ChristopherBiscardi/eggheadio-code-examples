After initializing the demo database with the demo content, the query we use is:

```
SelectAll(
  ["data", "firstName"],
  Map(
    Select(
      "data",
      Paginate(Match(Index("all_customers")))
    ),
    Lambda("customer", Get(Var("customer")))
  )
)
```

I encourage you to play around with it and try to break it.
