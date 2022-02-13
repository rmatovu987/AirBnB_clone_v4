$(function () {
  const amenitiesDict = {};

  $('DIV.amenities DIV.popover INPUT').click(function () {
    const amenityId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');

    if ($(this).is(':checked')) {
      amenitiesDict[amenityId] = amenityName;
    } else {
      delete amenitiesDict[amenityId];
    }

    $('DIV.amenities H4').text(Object.values(amenitiesDict).join(', '));
  });
});
