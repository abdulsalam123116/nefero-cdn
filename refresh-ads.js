window.slots = []
      setTimeout(() => {
        var slotss = googletag.pubads().getSlots();
        var ad_units = []
        var done = []
        slotss.forEach(slot => {
          var sizes        = slot.getSizes()
          var ad_unit_path = slot.getSlotId().getAdUnitPath()
          var dom_display  = slot.getSlotId().getDomId()
          var iframe       = document.getElementById( "google_ads_iframe_" + slot.getSlotId().getId())
          var width        = iframe.width
          var height       = iframe.height
          slots.push({"sizes" : sizes,"ad_unit_path":ad_unit_path,"dom_display":dom_display,"width":width,"height":height})
        });
        googletag.destroySlots();
        var count = slots.length
        slots.forEach(slot => {
          var sizes = []
          slot["sizes"].forEach(size => {
            sizes.push([size.l,size.j])
          });
        for (let index = 0; index < ad_units.length; index++) {
          var ad_unit = ad_units[index];
          if(count > 0 && !done.includes(ad_unit) )
          {
              done.push(ad_unit);
              count = count - 1
              window.googletag = window.googletag || {cmd: []};
              googletag.cmd.push(function() {
              googletag.defineSlot(ad_unit, sizes, slot["dom_display"]).addService(googletag.pubads());
              googletag.enableServices();
              googletag.display(slot["dom_display"]);
            });
            break
          }
        }
        });
      }, 30000);
