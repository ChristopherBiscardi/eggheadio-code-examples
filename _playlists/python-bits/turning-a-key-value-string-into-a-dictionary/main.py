rawData = "@badge-info=subscriber/4;badges=broadcaster/1,subscriber/0,premium/1;color=#1fa9f4;custom-reward-id=1bdd7227-1e23-4470-996e-50c7b8698253;display-name=chrisbiscardi;emotes=;flags=;id=29034hjg-asfd-2345-hgr3-12435jk;mod=0;room-id=48445936;subscriber=1;tmi-sent-ts=1568705771602;turbo=0;user-id=129402"
info = dict(item.split("=") for item in rawData.split(";"))
print(info)
print("subscriber is: ", info.get("subscriber"))