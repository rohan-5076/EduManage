function detectIntent(message) {
  const text = message.toLowerCase();

  // Course Intents
  if (text.includes("inactive") && text.includes("course")) {
    return "inactive_courses";
  }
  if (
    (text.includes("active") && text.includes("course")) ||
    text.includes("show active courses")
  ) {
    return "active_courses";
  }
  if (text.includes("total") && text.includes("course")) {
    return "total_courses";
}





  if (text.includes("active") && text.includes("course")) {
    return "active_courses";
  }

  // Student Intents
  if (text.includes("total") && text.includes("student")) {
    return "total_students";
  }

  // Teacher Intents
  if (text.includes("total") && text.includes("teacher")) {
    return "total_teachers";
  }

  // Subject Intents
  if (text.includes("total") && text.includes("subject")) {
    return "total_subjects";
  }

  return "unknown";
}

module.exports = {
  detectIntent,
};
