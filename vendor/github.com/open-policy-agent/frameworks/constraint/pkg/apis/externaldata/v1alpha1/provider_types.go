/*

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ProviderSpec defines the desired state of Provider.
type ProviderSpec struct {
	// URL is the url for the provider. URL is prefixed with http:// or https://.
	URL string `json:"url,omitempty"`
	// Timeout is the timeout when querying the provider.
	Timeout int `json:"timeout,omitempty"`
	// CABundle is a base64-encoded string that contains the TLS CA bundle in PEM format.
	// It is used to verify the signature of the provider's certificate.
	CABundle string `json:"caBundle,omitempty"`
}

// +genclient
// +genclient:nonNamespaced
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:resource:scope=Cluster
// +kubebuilder:deprecatedversion:warning="externaldata.gatekeeper.sh/v1alpha1 is deprecated. Use externaldata.gatekeeper.sh/v1beta1 instead."

// Provider is the Schema for the Provider API
// +k8s:openapi-gen=true
// +kubebuilder:storageversion
// +k8s:conversion-gen-external-types=github.com/open-policy-agent/frameworks/constraint/pkg/apis/externaldata
type Provider struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty"`

	// Spec defines the Provider specifications.
	Spec ProviderSpec `json:"spec,omitempty"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object

// ProviderList contains a list of Provider.
type ProviderList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty"`

	// Items contains the list of Providers.
	Items []Provider `json:"items"`
}

func init() {
	SchemeBuilder.Register(&Provider{}, &ProviderList{})
}
