function getTimeString(adjustmentSeconds) {
    let date = new Date();
    let adjustedDate = new Date(date - (adjustmentSeconds * 1000));
  
    // Test mode: manually set minutes to be less than 50
    let testMode = false;
    if (testMode) {
      adjustedDate.setMinutes(50);
    }
  
    let h = adjustedDate.getHours(); // 0 - 23
    let m = adjustedDate.getMinutes(); // 0 - 59
    let s = adjustedDate.getSeconds(); // 0 - 59
    let hs = Math.round(adjustedDate.getMilliseconds() / 10);
    let twelveHourTime = true;
    let ampm = "";
  
    if (twelveHourTime) {
      // add session
      if (h < 12) {
        ampm = " AM";
      } else {
        ampm = " PM";
      }
      // change number
      if (h > 12) {
        h = h - 12;
      }
    }
  
    // Format strings after the logic
    h = (h < 10) ? "0" + h : h.toString();
    m = (m < 10) ? "0" + m : m.toString();
    s = (s < 10) ? "0" + s : s.toString();
    hs = (hs < 10) ? "0" + hs : hs.toString();
  
    let timeString = h + ":" + m;
  
    // Add seconds to the time string only if they are not '00' or if the minutes are >= 50
    if (!(s === '00' && m < 50)) {
      timeString += ":" + s;
    }
  
    // Add milliseconds to the time string only if the minutes are >= 50
    if (parseInt(m) >= 50) {
      timeString += ":" + hs;
    }
  
    timeString += ampm;
  
    return timeString;
  }
  
  console.log(getTimeString(500));  // Run the function with test mode enabled