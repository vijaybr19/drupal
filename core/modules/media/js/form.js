/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.mediaFormSummaries = {
    attach(context) {
      const $context = $(context);
      $context.find('.media-form-author').drupalSetSummary(context => {
        const $authorContext = $(context);
        const name = $authorContext.find('.field--name-uid input').val();
        const date = $authorContext.find('.field--name-created input').val();

        if (name && date) {
          return Drupal.t('By @name on @date', {
            '@name': name,
            '@date': date
          });
        }

        if (name) {
          return Drupal.t('By @name', {
            '@name': name
          });
        }

        if (date) {
          return Drupal.t('Authored on @date', {
            '@date': date
          });
        }
      });
    }

  };
})(jQuery, Drupal);