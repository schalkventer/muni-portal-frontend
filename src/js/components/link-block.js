export class LinkBlock {
  constructor(props) {
    this.element = this.getTemplate(props).clone();
    console.assert(this.element.length == 1);
    this.labelContainer = this.element.find(".h3-block-title");

    this.element.attr("href", props.url);
    this.labelContainer.text(props.title);

    if (props.subjectIconClasses) {
      this.subjectIconContainer = this.element.find(".link-block__icon div");
      console.assert(this.subjectIconContainer.length == 1);
      this.subjectIconContainer.attr("class", "");
      this.subjectIconContainer.addClass(props.subjectIconClasses);
    }
    if (props.targetIconClasses) {
      this.targetIconContainer = this.element.find(".link-block__action-icon div");
      console.assert(this.targetIconContainer.length == 1);
      this.targetIconContainer.attr("class", "");
      this.targetIconContainer.addClass(props.targetIconClasses);
    }
    if (props.subtitle) {
      this.subtitleContainer = this.element.find(".subtitle");
      console.assert(this.subtitleContainer.length == 1);
      this.subtitleContainer.text(props.subtitle);
    }
  }

  getTemplate(props) {
    if (props.targetIconClasses &&
        props.subtitle &&
        props.shadedTarget) {
      return $(".styles .link-block:eq(6)");
    }
    if (props.targetIconClasses &&
               props.subjectIconClasses &&
               props.subtitle) {
      return $(".styles .link-block:eq(5)");
    }
    if (props.subjectIconClasses) {
      return $(".styles .link-block:eq(3)");
    }
    if (props.subjectIconClasses &&
               props.subtitle) {
      return $(".styles .link-block:eq(2)");
    }
    return $(".styles .link-block:eq(1)");
  }

  render() {
    return this.element;
  }
}
