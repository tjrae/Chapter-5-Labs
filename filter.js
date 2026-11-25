const showAllCheckbox = document.querySelector("#show-all");
const filterCheckboxes = document.querySelectorAll(".filter-input");

// Show and hide albums based on which check boxes are checked
for (let checkbox of filterCheckboxes) {
   checkbox.addEventListener("change", (e) => {

      // Different behavior for show all checkbox
      if (checkbox === showAllCheckbox) {
         // Check all check boxes if this is checked
         if (showAllCheckbox.checked) {
            for (let checkBox of filterCheckboxes) {
               checkBox.checked = true;

               // Let check boxes know they've been checked
               checkBox.dispatchEvent(new Event("change"));
            }
         }
      }
      else {
         const checkboxId = e.target.id;
         const affectedItems = document.querySelectorAll(".tag-" + checkboxId);

         for (let item of affectedItems) {
            //item.style.display = checkbox.checked ? "block" : "none";
            if (checkbox.checked) {
               item.style.removeProperty("display");
            }
            else {
               item.style.display = "none";
            }

            // Show all check box should not be checked if any other checkboxes unchecked
            if (!checkbox.checked && showAllCheckbox.checked) {
               showAllCheckbox.checked = false;
            }
         }
      }
   });
}